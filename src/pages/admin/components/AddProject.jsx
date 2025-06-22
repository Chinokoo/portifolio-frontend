import { useRef, useState } from "react";
import { useProjectStore } from "../../../store/projectStore";
import { motion } from "framer-motion";

const AddProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [image, setImage] = useState(null);
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  const { loading, addProject } = useProjectStore();
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ name, type, description, liveUrl, githubUrl, image, date });
    setName("");
    setDescription("");
    setGithubUrl("");
    setLiveUrl("");
    setImage(null);
    setType("");
    setDate("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
          Project Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--color-text)]">
          Project Type
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
          required
        >
          <option value="">Select project type</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--color-text)]">
          Description
        </label>
        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[var(--color-text)]">
            GitHub URL
          </label>
          <input
            type="url"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[var(--color-text)]">
            Live URL
          </label>
          <input
            type="url"
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
            className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--color-text)]">
          Completion Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--color-text)]">
          Project Image
        </label>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="px-4 py-2 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-border)] rounded-md hover:bg-[var(--color-bg)] dark:hover:bg-[var(--color-bg-dark)] transition-colors"
          >
            Choose Image
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          {image && (
            <span className="text-sm text-[var(--color-text)]">
              Image selected
            </span>
          )}
        </div>
        {image && (
          <div className="mt-2">
            <img
              src={image}
              alt="Project preview"
              className="max-w-full h-auto max-h-40 rounded-md"
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-gradient-to-r from-[var(--color-accent)] dark:from-[#4f46e5] to-[var(--color-primary)] dark:to-[#9333ea] shadow-lg hover:shadow-xl px-4 py-2 rounded-2xl font-semibold text-white text-sm hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Adding..." : "Add Project"}
      </button>
    </motion.div>
  );
};

export default AddProject;
