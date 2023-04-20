import { useRouter } from "next/router";
import Image from "next/image";
import { api } from "@component/utils/api";
import { Motion } from "@component/components/Motion";

const Project = () => {
  const router = useRouter();
  const { data: projects } = api.projects.getAll.useQuery();

  const foundProject = projects?.find((p) => p.id === router.query.projectId);

  return (
    <Motion>
      <div key={foundProject?.id}>
        <div>{foundProject?.title}</div>
        {foundProject?.imageUrl && (
          <Image
            src={foundProject?.imageUrl || ""}
            alt={foundProject?.title || ""}
            width={600}
            height={600}
          />
        )}
        <p>
          {foundProject?.technologies?.toUpperCase().replace(/ /g, ", ") ??
            "no technologies specified"}
        </p>
        <p>{foundProject?.content}</p>
        <p>{foundProject?.date}</p>
      </div>
    </Motion>
  );
};

export default Project;
