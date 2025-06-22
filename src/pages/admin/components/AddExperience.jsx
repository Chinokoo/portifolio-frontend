import { useState } from "react";
import { useExperienceStore } from "../../../store/experienceStore";
import { motion } from "framer-motion";

const AddExperience = () => {
  const [experience, setExperience] = useState({
    companyName: "",
    jobTitle: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const { addExperience, loading } = useExperienceStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addExperience(experience);
    setExperience({
      companyName: "",
      jobTitle: "",
      description: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--color-text)]">
          Company Name
        </label>
        <input
          type="text"
          value={experience.companyName}
          onChange={(e) =>
            setExperience({ ...experience, companyName: e.target.value })
          }
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--color-text)]">
          Job Title
        </label>
        <input
          type="text"
          value={experience.jobTitle}
          onChange={(e) =>
            setExperience({ ...experience, jobTitle: e.target.value })
          }
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--color-text)]">
          Description
        </label>
        <textarea
          rows={4}
          value={experience.description}
          onChange={(e) =>
            setExperience({ ...experience, description: e.target.value })
          }
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[var(--color-text)]">
            Start Date
          </label>
          <input
            type="date"
            value={experience.startDate}
            onChange={(e) =>
              setExperience({ ...experience, startDate: e.target.value })
            }
            className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[var(--color-text)]">
            End Date
          </label>
          <input
            type="date"
            value={experience.endDate}
            onChange={(e) =>
              setExperience({ ...experience, endDate: e.target.value })
            }
            className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-gradient-to-r from-[var(--color-accent)] dark:from-[#4f46e5] to-[var(--color-primary)] dark:to-[#9333ea] shadow-lg hover:shadow-xl px-4 py-2 rounded-2xl font-semibold text-white text-sm hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Adding..." : "Add Experience"}
      </button>
    </motion.div>
  );
};

export default AddExperience;
