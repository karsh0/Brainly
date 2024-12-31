import { useEffect, useState } from "react"
import { PlusIcon } from "../components/Icons/PlusIcon"
import { ShareIcon } from "../components/Icons/ShareIcon"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { Sidebar } from "../components/ui/Sidebar"
import { CreateContentModal } from "./CreateContentModal"
import { BACKEND_URL } from "../config"
import axios from "axios"


export const Homepage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => setContents(response.data.content));
  }, [modalOpen]);


  interface contentProps{
      link: String,
      type: String,
      title: String,
      content: String,
      tags:[string],
  }

  const handleDelete = (link: any) => {
    setContents((prevContents) =>
      prevContents.filter((content: contentProps) => content.link !== link)
    );
  };

  return (
    <div className="flex text-black h-screen">
      <CreateContentModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />
      <div className="hidden">
        <img src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png" className="w-6 absolute top-3 left-6" alt="" />
      </div>
      <div className="hidden md:flex w-[20%] h-full">
      <Sidebar />
      </div>
      <div className="w-full h-full p-8 md:p-10">
        <div className="flex flex-col sm:flex-row justify-between pb-5">
          <h1 className="text-3xl text-bold">All Notes</h1>
          <div className="flex gap-2">
            <Button
              onClick={async () => {
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/brain/share`,
                  {
                    share: true,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );
                const shareUrl = response.data.hash;
                alert(shareUrl);
              }}
              startIcon={<ShareIcon />}
              size="md"
              title={"Share brain"}
              variant={"secondary"}
            />

            <Button
              startIcon={<PlusIcon />}
              onClick={() => {
                setModalOpen(true);
              }}
              size="md"
              title={"Add content"}
              variant={"dark"}
            />
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {contents.map(({ title, content, type, link, tags }) => (
            <Card
              key={link}
              title={title}
              content={content}
              link={link}
              type={type}
              tags={tags}
              onDelete={handleDelete} // Pass down the delete handler
            />
          ))}
        </div>
      </div>
    </div>
  );
};
