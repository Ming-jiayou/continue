import StyledMarkdownPreview from "../../../components/markdown/StyledMarkdownPreview";
import { ToolState } from "./types";

interface RunTerminalCommandToolCallProps {
  command: string;
  state: ToolState;
}

export function RunTerminalCommand(props: RunTerminalCommandToolCallProps) {
  return (
    <>
      <StyledMarkdownPreview
        isRenderingInStepContainer={true}
        source={`\`\`\`bash .sh\n${props.command}\n\`\`\``}
      />
    </>
  );
}
