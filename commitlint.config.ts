import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: { parserOpts: { issuePrefixes: ["TT-"] } },
  rules: { "references-empty": [2, "never"] },
};

export default Configuration;
