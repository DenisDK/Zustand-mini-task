"use client";

import { Button } from "@/components/ui/button";
import { useMultiStepFormStore } from "../store/multiStepForm.store";

// Icons
import { FaPenNib } from "react-icons/fa";
import { LuRocket } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";
import { BsMortarboard } from "react-icons/bs";

const roles = [
  {
    name: "Founder",
    icon: <LuRocket />,
  },
  {
    name: "Developer",
    icon: <IoCodeSlash />,
  },
  {
    name: "Designer",
    icon: <FaPenNib />,
  },
  {
    name: "Student",
    icon: <BsMortarboard />,
  },
];

const StepThree = ({
  errors,
  setErrors,
}: {
  errors: Record<string, string>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}) => {
  // const formData = useMultiStepFormStore((state) => state.formData);
  const role = useMultiStepFormStore((state) => state.formData.role);
  const updateFormData = useMultiStepFormStore((state) => state.updateFormData);

  const handleRoleSelect = (selectedRole: string) => {
    updateFormData({ role: selectedRole });

    setErrors((prev) => ({
      ...prev,
      role: "",
    }));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h2 className="text-[14px] text-white/60">Details</h2>
        <h3 className="text-2xl font-bold text-white/90">
          What best describes you?
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {roles.map((roleItem) => (
          <Button
            key={roleItem.name}
            variant="outline"
            type="button"
            onClick={() => handleRoleSelect(roleItem.name)}
            className={` text-white/50 h-20 hover:border-white/40! transition-all duration-300  ${
              role === roleItem.name
                ? "border-dashed border-white/80! hover:border-white/80! bg-blue-400/10 text-white/80"
                : "border-white/10 bg-white/5 hover:bg-white/10"
            }`}
          >
            <div className="flex flex-col items-center gap-2 text-sm font-bold">
              {roleItem.icon}
              {roleItem.name}
            </div>
          </Button>
        ))}
      </div>

      {errors.role && <p className="text-sm text-red-400">{errors.role}</p>}
    </div>
  );
};

export default StepThree;
