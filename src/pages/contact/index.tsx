import { type NextPage } from "next";
import { MotionParent, MotionChild } from "@component/components/Motion";
import { Typography } from "@component/components/Typography";
import Link from "next/link";

const Contact: NextPage = () => {
  return (
    <MotionParent>
      <div className="flex flex-col gap-2">
        <MotionChild>
          <Typography variant="text">
            <Link
              href="https://www.linkedin.com/in/samed-polat-b400891b2/"
              className=" duration-300 hover:opacity-40"
            >
              Connect on LinkedIn
            </Link>
          </Typography>
        </MotionChild>
        <MotionChild>
          <Typography variant="text">
            <Link
              href="mailto:email@example.com"
              className=" duration-300 hover:opacity-40"
            >
              Send a mail
            </Link>
          </Typography>
        </MotionChild>
      </div>
    </MotionParent>
  );
};

export default Contact;
