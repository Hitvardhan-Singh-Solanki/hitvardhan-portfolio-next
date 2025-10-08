import { Heading } from "@/components/heading/heading";
import Link from "next/link";
import "./about.scss";

export default function About() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "60%", label: "Satisfaction Boost" },
    { value: "€1.5M", label: "Cost Savings" },
    { value: "20+", label: "Projects Delivered" },
  ];

  const expertise = [
    {
      title: "Frontend Development",
      skills: ["React", "Angular", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Python", "Express", "FastAPI", "RESTful APIs"],
    },
    {
      title: "Database & Cloud",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Docker"],
    },
    {
      title: "Best Practices",
      skills: ["Agile", "CI/CD", "Testing", "Code Review", "Mentoring"],
    },
  ];

  return (
    <div className="about-page">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="about-hero">
          <Heading>About Me</Heading>
          <p className="about-intro">
            Senior Full-Stack Software Engineer based in{" "}
            <span className="highlight">Barcelona, Spain</span>, with a decade
            of experience crafting innovative web solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bio Section */}
        <div className="bio-section">
          <h2 className="section-title">My Story</h2>
          <div className="bio-content">
            <p>
              I have a passion for building innovative solutions that drive{" "}
              <span className="highlight">exceptional user experiences</span>{" "}
              and <span className="highlight">operational efficiency</span>.
              Over the years, I&apos;ve contributed to high-impact projects
              across startups and multinational corporations, demonstrating
              adaptability and delivering results that matter.
            </p>
            <p>
              One of my proudest achievements was leading the development of a
              vendor onboarding solution that boosted satisfaction by{" "}
              <span className="highlight">60%</span> and saved{" "}
              <span className="highlight">€1.5 million</span>. I also developed
              a customer support SDK that enhanced communication across
              platforms, reduced costs, and significantly elevated user
              experiences.
            </p>
            <p>
              I&apos;m passionate about leveraging technology to solve
              real-world problems while fostering a culture of{" "}
              <span className="highlight">collaboration</span> and{" "}
              <span className="highlight">continuous learning</span>. Outside
              work, I enjoy exploring emerging technologies and sharing
              knowledge with fellow engineers.
            </p>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="expertise-section">
          <h2 className="section-title">Expertise</h2>
          <div className="expertise-grid">
            {expertise.map((area, index) => (
              <div key={index} className="expertise-card">
                <h3 className="expertise-title">{area.title}</h3>
                <div className="skills-list">
                  {area.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore More Section */}
        <div className="explore-section">
          <h2 className="section-title">Explore More</h2>
          <div className="explore-grid">
            <Link href="/projects" className="explore-card">
              <div className="explore-header">
                <div className="explore-icon-wrapper">
                  <svg
                    className="explore-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="explore-title">Projects</h3>
              </div>
              <p className="explore-description">
                Check out my portfolio of web applications, full-stack
                solutions, and innovative projects that showcase my technical
                expertise.
              </p>
              <div className="explore-arrow">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>

            <Link href="/blogs" className="explore-card">
              <div className="explore-header">
                <div className="explore-icon-wrapper">
                  <svg
                    className="explore-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 3C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 7H15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 11H15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 15H13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="explore-title">Blog</h3>
              </div>
              <p className="explore-description">
                Read my articles on web development, best practices, and lessons
                learned from building scalable applications.
              </p>
              <div className="explore-arrow">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>

            <Link href="/certificates" className="explore-card">
              <div className="explore-header">
                <div className="explore-icon-wrapper">
                  <svg
                    className="explore-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 13L8 22L12 19L16 22L15 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8V8.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="explore-title">Certifications</h3>
              </div>
              <p className="explore-description">
                View my professional certifications and credentials in web
                technologies, cloud computing, and software engineering.
              </p>
              <div className="explore-arrow">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
