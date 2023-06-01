import { useRouter } from "next/router";
import Image from "next/image";
import { api } from "@component/utils/api";
import { Motion } from "@component/components/Motion";
import Link from "next/link";
import { Typography } from "@component/components/Typography";

const Project = () => {
  const router = useRouter();
  const { data: projects } = api.projects.getAll.useQuery();

  const foundProject = projects?.find((p) => p.id === router.query.projectId);

  return (
    <Motion>
      <div key={foundProject?.id} className="flex max-w-xs flex-col gap-2">
        <Typography variant="title">{foundProject?.title}</Typography>
        {foundProject?.imageUrl && (
          <Image
            src={foundProject?.imageUrl || ""}
            alt={foundProject?.title || ""}
            width={600}
            height={600}
          />
        )}
        <Typography variant="text">
          {foundProject?.technologies?.toUpperCase().replace(/ /g, ", ") ??
            "no technologies specified"}
        </Typography>
        <Typography variant="text">{foundProject?.content}</Typography>
        <Typography variant="heading">{foundProject?.date}</Typography>
        <div className="flex items-center justify-end gap-2">
          {foundProject?.link1 && (
            <Link target="_blank" href={foundProject.link1}>
              <Typography variant="text">Live</Typography>
            </Link>
          )}
          <span>•</span>
          {foundProject?.link2 && (
            <Link target="_blank" href={foundProject.link2}>
              <Typography variant="text">GitHub</Typography>
            </Link>
          )}
        </div>
      </div>
    </Motion>
  );
};

export default Project;
