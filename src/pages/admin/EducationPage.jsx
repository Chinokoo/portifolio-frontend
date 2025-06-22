import { useState, useEffect } from "react";
import { useEducationStore } from "../../store/educationStore";
import { AiOutlineLoading } from "react-icons/ai";
import { TbTableOff } from "react-icons/tb";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import EditEducation from "./components/EditEducation";
import { motion } from "framer-motion";

const EducationPage = () => {
  const { educations, loading, getEducation, deleteEducation } =
    useEducationStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [education, setEducation] = useState({});

  useEffect(() => {
    getEducation();
  }, [getEducation]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <AiOutlineLoading className="animate-spin w-40 h-40" />
      </div>
    );
  }

  if (educations.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-full">
        <TbTableOff className="h-48 w-48 text-red-500" />
        <p className="text-lg text-gray-400 italic">No Education available!</p>
      </div>
    );
  }

  const handleDelete = async (id) => {
    deleteEducation(id);
    setIsDelete(false);
  };

  const handleEditButton = (education) => {
    setEducation(education);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {educations.map((edu) => (
          <motion.div
            key={edu._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[var(--color-bg)] dark:bg-[var(--color-bg-dark)] rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-primary)]">
                    {edu.name}
                  </h3>
                  <p className="text-sm text-[var(--color-accent)]">
                    {edu.type}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditButton(edu)}
                    className="text-[var(--color-text)] hover:text-[var(--color-accent)]"
                  >
                    <MdEdit />
                  </button>
                  <button
                    onClick={() => {
                      setEducation(edu);
                      setIsDelete(true);
                    }}
                    className="text-[var(--color-text)] hover:text-red-500"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>

              <p className="mt-2 text-sm text-[var(--color-text)] line-clamp-3">
                {edu.description}
              </p>

              <div className="mt-4">
                <span className="text-xs text-[var(--color-text)]">
                  Completed:{" "}
                  {new Date(edu.yearCompleted).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[var(--color-bg)] dark:bg-[var(--color-bg-dark)] p-6 rounded-xl shadow-xl max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[var(--color-primary)]">
                Edit Education
              </h3>
              <button onClick={() => setIsModalOpen(false)}>
                <FaXmark className="text-[var(--color-text)] hover:text-[var(--color-accent)]" />
              </button>
            </div>
            <EditEducation oldEducation={education} />
          </motion.div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDelete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[var(--color-bg)] dark:bg-[var(--color-bg-dark)] p-6 rounded-xl shadow-xl max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-red-500">
                Delete {education.name}?
              </h3>
              <button onClick={() => setIsDelete(false)}>
                <FaXmark className="text-[var(--color-text)] hover:text-[var(--color-accent)]" />
              </button>
            </div>
            <p className="text-[var(--color-text)] mb-6">
              Are you sure you want to delete this education entry?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setIsDelete(false)}
                className="flex-1 py-2 px-4 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-bg-light)] dark:hover:bg-[var(--color-bg)] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(education._id)}
                className="flex-1 py-2 px-4 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default EducationPage;
