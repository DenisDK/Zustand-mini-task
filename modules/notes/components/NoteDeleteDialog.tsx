import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type NoteDeleteDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
};

const NoteDeleteDialog = ({
  open,
  onOpenChange,
  onConfirm,
}: NoteDeleteDialogProps) => {
  const handleDelete = () => {
    onConfirm();
    onOpenChange(false);
  };
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="overflow-hidden rounded-xl border border-gray-300 bg-[#ebebeb] p-0 text-gray-900 shadow-xl">
        <AlertDialogHeader className="p-6">
          <AlertDialogTitle className="text-lg font-semibold text-gray-900">
            Delete this note?
          </AlertDialogTitle>

          <AlertDialogDescription className="text-sm leading-relaxed text-gray-500">
            This action cannot be undone. This will permanently delete your
            note.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex-row justify-end gap-2 border-t border-gray-300 bg-[#dfdfdf] px-6 py-4">
          <AlertDialogCancel className="mt-0 border border-[#c0c0c0]! bg-[#ccc]! text-gray-700 hover:bg-[#b8b8b8]! hover:text-gray-900">
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            className="bg-red-500 text-white hover:bg-red-600 border border-[#c0c0c0]"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NoteDeleteDialog;
