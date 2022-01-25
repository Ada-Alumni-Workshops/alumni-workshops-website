import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <>
      <Layout>
        <h1>Lovelace Learning Labs</h1>
        <p>
          Lovelace Learning Labs is a free, biannual continuing education series
          for the Ada alum community, focusing on technical skills, career
          advancement, and personal development.
        </p>
        <article>
          <h2>Example of Past Offerings </h2>
          <ul>
            <li>Be Your Own PM</li>
            <li>Technical Patterns: Concurrency</li>
            <li>Financial Stuff I Wish I had Known Before</li>
            <li>Writing Excellent Technical Documentation</li>
            <li>Networking Best Practices</li>
          </ul>
        </article>
        <article>
          <h2>Values</h2>
          <ul>
            <li>
              We actively work to be anti-racist, inclusive, and equitable, with
              a focus on the impacts of intersectional diversity.{" "}
            </li>
            <li>
              We hold a student-centered mindset and are committed to delivering
              a high-quality experience that appropriately challenges students.{" "}
            </li>
            <li>
              We are an authentic community of learners with a growth mindset.
              We take accountability for our work as individuals because we are
              part of a team that supports and can count on each other.
            </li>
            <li>
              We take ownership of our work: we admit to our mistakes, take
              responsibility for creating solutions, and consider the impact on
              staff and students when we make decisions.
            </li>
            <li>
              We are impact-driven. We strive to innovate and embrace change
              that leads to increasing the impact of our work.
            </li>
          </ul>
        </article>
        <article>
          <h2>Community Guidelines</h2>
          <ul>
            <li>
              Will not discriminate against anyone on the basis of their gender
              or gender orientation, sex, sexual orientation, race, color,
              religion, age, national or ethnic origin, disability, medical
              condition or any other identity or affinity.
            </li>
            <li>
              Our community includes students across the gender spectrum. We use
              the umbrella term “gender diverse.” As such, we ask that you are
              conscious of people’s pronouns. Just ask! Education around gender
              inclusion and justice should be done on your own time. Please do
              not expect alum to do this for you.{" "}
            </li>
            <li>
              Refrain from using oppressive language (e.g., racist, homophobic,
              transphobic, ableist, sexist, classist language or slurs). This
              includes, but is not limited to, respectful interactions when
              communicating, in-person and online.
            </li>
            <li>
              Harassment of any kind, including stalking, deliberate
              intimidation, unwelcome physical attention, physical, sexual and
              verbal harassment will not be tolerated.{" "}
            </li>
            <li>
              Remember that your individual actions have a direct impact on
              alum.
            </li>
            <li>
              We encourage you to be aware of the pain points that alum may be
              facing including exhaustion, insecurity linked to inexperience,
              isolation, imposter syndrome and strenuous time commitments.{" "}
            </li>
            <li>
              We ask that you are aware of your own personal power and privilege
              and how it shows up in group or office settings.
            </li>
            <li>
              Our alum community trusts us to protect their privacy. What you
              hear or observe within the Ada community is privileged. While
              facilitating, keep information private and secure from those
              outside Ada staff.
            </li>
            <li>Practice understanding and listening to alum and Ada staff.</li>
            <li>
              Alum give so much time and energy to Ada Developers Academy,
              positively impacting this organization and community. Look for
              ways to engage them, advocate for them, and empower them to
              achieve their goals.
            </li>
          </ul>
        </article>
        <article>
          <h2>Questions &amp; Comments</h2>
          <p>
            For any questions or comments, please contact us at Chris McAnally
            at <a href="mailto:chris@adadev.org">chris@adadev.org</a>
          </p>
        </article>
      </Layout>
    </>
  );
};

export default AboutPage;
