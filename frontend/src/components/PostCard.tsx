import { Pencil, Trash2 } from "lucide-react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import PostForm from "./PostForm";
import { Dialog } from "@radix-ui/react-dialog";
import { useState } from "react";

interface Props {
  title: string;
  author: string;
  content: string;
  timeAgo: string;
  onDelete: () => void;
  onEdit: (title: string, content: string) => void;
}

export default function PostCard({
  title,
  author,
  content,
  timeAgo,
  onDelete,
  onEdit,
}: Props) {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const toggleEdit = () => setIsOpenEdit(!isOpenEdit);
  const toggleDelete = () => setIsOpenDelete(!isOpenDelete);
  
  return (
    <>
      <div className="bg-white border border-blue-500 rounded-md mb-4">
        <div className="flex justify-between items-center bg-blue-500 text-white p-4 rounded-t-md">
          <h3 className="font-bold">{title}</h3>
          <div className="flex space-x-2">
            <Pencil className="w-4 h-4 cursor-pointer" onClick={toggleEdit} />
            <Trash2 className="w-4 h-4 cursor-pointer" onClick={toggleDelete} />
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm">
          <div className="text-gray-600 font-semibold">
            @{author}{" "}
            <span className="text-gray-400 font-normal ml-2">{timeAgo}</span>
          </div>
          <p className="text-gray-800">{content}</p>
        </div>
      </div>

      <Dialog open={isOpenEdit} onOpenChange={toggleEdit}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Item</DialogTitle>
          </DialogHeader>
          <PostForm
            initialTitle={title}
            initialContent={content}
            onSubmit={(newTitle, newContent) => {
              toggleEdit();
              onEdit(newTitle, newContent);
            }}
            submitLabel="Save"
            onCancel={toggleEdit}
          />
        </DialogContent>
      </Dialog>

      <AlertDialog open={isOpenDelete} onOpenChange={toggleDelete}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this item?
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={onDelete}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
