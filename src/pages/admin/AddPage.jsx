import AddEducation from "./components/AddEducation";
import AddExperience from "./components/AddExperience";
import AddProject from "./components/AddProject";
import { motion } from "framer-motion";

const AddPage = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[var(--color-bg)] dark:bg-[var(--color-bg-dark)] rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-bold text-[var(--color-primary)] mb-4">
            Add New Project
          </h2>
          <AddProject />
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-[var(--color-bg)] dark:bg-[var(--color-bg-dark)] rounded-xl shadow-md p-6"
          >
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-4">
              Add New Education
            </h2>
            <AddEducation />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-[var(--color-bg)] dark:bg-[var(--color-bg-dark)] rounded-xl shadow-md p-6"
          >
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-4">
              Add New Experience
            </h2>
            <AddExperience />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
