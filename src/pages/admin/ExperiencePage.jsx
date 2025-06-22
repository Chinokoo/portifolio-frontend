import { useState, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { TbTableOff } from "react-icons/tb";
import { useExperienceStore } from "../../store/experienceStore";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import EditExperience from "./components/EditExperience";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  const { experiences, loading, getExperience, deleteExperience } =
    useExperienceStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [experience, setExperience] = useState({});

  useEffect(() => {
    getExperience();
  }, [getExperience]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <AiOutlineLoading className="animate-spin w-40 h-40" />
      </div>
    );
  }

  if (experiences.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-full">
        <TbTableOff className="h-48 w-48 text-red-500" />
        <p className="text-lg text-gray-400 italic">No Experiences available!</p>
      </div>
    );
  }

  const handleDelete = async (id) => {
    deleteExperience(id);
    setIsDelete(false);
  };

  const handleEditButton = (exp) => {
    setExperience(exp);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((exp) => (
          <motion.div
            key={exp._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[var(--color-bg)] dark:bg-[var(--color-bg-dark)] rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-primary)]">
                    {exp.companyName}
                  </h3>
                  <p className="text-sm text-[var(--color-accent)]">
                    {exp.jobTitle}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditButton(exp)}
                    className="text-[var(--color-text)] hover:text-[var(--color-accent)]"
                  >
                    <MdEdit />
                  </button>
                  <button
                    onClick={() => {
                      setExperience(exp);
                      setIsDelete(true);
                    }}
                    className="text-[var(--color-text)] hover:text-red-500"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>

              <p className="mt-2 text-sm text-[var(--color-text)] line-clamp-3">
                {exp.description}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <div>
                  <span className="text-xs text-[var(--color-text)]">From:</span>
                  <p className="text-sm">
                    {new Date(exp.startDate).toLocaleString("default", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-text)]">To:</span>
                  <p className="text-sm">
                    {new Date(exp.endDate).toLocaleString("default", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
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
                Edit Experience
              </h3>
              <button onClick={() => setIsModalOpen(false)}>
                <FaXmark className="text-[var(--color-text)] hover:text-[var(--color-accent)]" />
              </button>
            </div>
            <EditExperience oldExperience={experience} />
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
                Delete {experience.companyName}?
              </h3>
              <button onClick={() => setIsDelete(false)}>
                <FaXmark className="text-[var(--color-text)] hover:text-[var(--color-accent)]" />
              </button>
            </div>
            <p className="text-[var(--color-text)] mb-6">
              Are you sure you want to delete this experience entry?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setIsDelete(false)}
                className="flex-1 py-2 px-4 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-bg-light)] dark:hover:bg-[var(--color-bg)] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(experience._id)}
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

export default ExperiencePage;
