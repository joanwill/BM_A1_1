"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { TodoDto } from "../../api/types";

export default function TodoDetailPage({ todo }: { todo: TodoDto | null }) {
  const router = useRouter();
  if (!todo)
    return (
      <div className="flex items-center justify-center h-64 text-lg text-gray-500">
        Todo not found
      </div>
    );

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Todo Details</h2>
      <div className="mb-4">
        <span className="font-semibold text-gray-700">Title:</span>
        <span className="ml-2 text-gray-900">{todo.title}</span>
      </div>
      <div className="mb-6">
        <span className="font-semibold text-gray-700">Completed:</span>
        <span
          className={`ml-2 px-2 py-1 rounded ${
            todo.isCompleted
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {todo.isCompleted ? "Yes" : "No"}
        </span>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => router.push(`?view=edit&id=${todo.id}`)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Edit
        </button>
        <button
          onClick={() => router.push("?view=list")}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}
