"use client";

interface OptionProps {
  label: string;
  isActive: boolean;
  onclick: () => void;
}

export default function Option({ label, isActive, onclick }: OptionProps) {
  return (
    <button
      className={`cursor-pointer px-2.5 py-1.25 text-xs ${isActive ? "tag tag-accent" : "tag tag-outline"}`}
      onClick={onclick}
    >
      {label}
    </button>
  );
}
