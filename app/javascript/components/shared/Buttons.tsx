import Button from "@mui/material/Button";

interface ButtonsProps {
  content: React.ReactNode | string;
  contained?: boolean;
}

const Buttons = ({ content, contained }: ButtonsProps) => {
  return (
    <Button
      variant={contained ? "contained" : "outlined"}
      sx={{ color: contained ? "#FFFFFF" : undefined, marginBottom: 1 }}
    >
      {content}
    </Button>
  );
};

export default Buttons;

