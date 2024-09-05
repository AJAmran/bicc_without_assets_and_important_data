import { motion } from "framer-motion";
import { teamMembers } from "../data/data";

const AboutTeam = () => {
  const itemVariants = {
    rest: { opacity: 1, y: 0 },
    hover: { opacity: 1, y: -5 },
  };

  return (
    <section className="py-16 bg-background" aria-labelledby="team-section">
      <div className="container mx-auto">
        <h2
          id="team-section"
          className="mb-12 text-3xl md:text-4xl font-heading font-bold text-center text-primary"
        >
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden bg-cardBackground rounded-lg shadow-lg"
              whileHover="hover"
              initial="rest"
              variants={itemVariants}
            >
              <img
                src={member.imagePath}
                alt={`Photo of ${member.name}`}
                title={member.name}
                loading="lazy"
                className="object-contain w-full h-64"
              />
              <div className="p-6">
                <h3 className="mb-2 text-lg font-body font-semibold text-text text-center">
                  {member.name}
                </h3>
                <p className="mb-2 text-md text-text font-body text-center">
                  {member.designation}
                </p>
                <p className="text-sm font-body text-mutedText">{member?.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
