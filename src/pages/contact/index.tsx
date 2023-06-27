import { type NextPage } from "next";
import { Motion } from "@component/components/Motion";
import { Typography } from "@component/components/Typography";
import Link from "next/link";

const Contact: NextPage = () => {
  return (
    <Motion>
      <div className="flex flex-col gap-2">
        <Typography variant="text">
          <Link
            href="https://www.linkedin.com/in/samed-polat-b400891b2/"
            className=" duration-300 hover:opacity-40"
          >
            Connect on LinkedIn
          </Link>
        </Typography>
        <Typography variant="text">
          <Link
            href="mailto:email@example.com"
            className=" duration-300 hover:opacity-40"
          >
            Send a mail
          </Link>
        </Typography>
      </div>
    </Motion>
  );
};

export default Contact;
