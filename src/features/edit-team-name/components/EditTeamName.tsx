"use client"

import Image from "next/image"
import { useEditTeamName } from "../hooks/useEditTeamName"

export default function EditTeamName() {

  const {
    editing,
    value,
    setValue,
    startEdit,
    cancelEdit,
    saveEdit
  } = useEditTeamName()

  return (
    <div className="flex items-center gap-2 text-lg font-semibold w-full">

      {editing ? (
        <>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxLength={20}
            size={35}
            className="bg-gray-600 rounded px-2"
          />

          <button
            onClick={saveEdit}
            className="text-green-400"
          >
            ✔
          </button>

          <button
            onClick={cancelEdit}
            className="text-red-400"
          >
            X
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold">{value}</h2>

          <button onClick={startEdit}>
            <Image
              src="/icons/edit.png"
              alt="edit"
              width={20}
              height={20}
            />
          </button>
        </>
      )}

    </div>
  )
}