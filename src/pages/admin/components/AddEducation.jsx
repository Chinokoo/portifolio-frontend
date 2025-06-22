import { useState } from "react";
import { useEducationStore } from "../../../store/educationStore";
import { motion } from "framer-motion";

const AddEducation = () => {
  const [education, setEducation] = useState({
    name: "",
    type: "",
    description: "",
    yearCompleted: "",
  });

  const { addEducation, loading } = useEducationStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addEducation(education);
    setEducation({
      name: "",
      type: "",
      description: "",
      yearCompleted: "",
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
          Institution Name
        </label>
        <input
          type="text"
          value={education.name}
          onChange={(e) =>
            setEducation({ ...education, name: e.target.value })
          }
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--color-text)]">
          Education Type
        </label>
        <select
          value={education.type}
          onChange={(e) =>
            setEducation({ ...education, type: e.target.value })
          }
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
          required
        >
          <option value="">Select education type</option>
          <option value="degree">Degree</option>
          <option value="certificate">Certificate</option>
          <option value="diploma">Diploma</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--color-text)]">
          Description
        </label>
        <textarea
          rows={4}
          value={education.description}
          onChange={(e) =>
            setEducation({ ...education, description: e.target.value })
          }
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--color-text)]">
          Completion Date
        </label>
        <input
          type="date"
          value={education.yearCompleted}
          onChange={(e) =>
            setEducation({ ...education, yearCompleted: e.target.value })
          }
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
          required
        />
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-gradient-to-r from-[var(--color-accent)] dark:from-[#4f46e5] to-[var(--color-primary)] dark:to-[#9333ea] shadow-lg hover:shadow-xl px-4 py-2 rounded-2xl font-semibold text-white text-sm hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Adding..." : "Add Education"}
      </button>
    </motion.div>
  );
};

export default AddEducation;
