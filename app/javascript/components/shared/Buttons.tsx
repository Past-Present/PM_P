import Button from "@mui/material/Button";

interface ButtonsProps {
  content: React.ReactNode | string;
  contained?: boolean;
  onClick?: () => void;
}

const Buttons = ({ content, contained, onClick }: ButtonsProps) => {
  return (
    <Button
      variant={contained ? "contained" : "outlined"}
      sx={{ color: contained ? "#FFFFFF" : undefined, marginBottom: 1 }}
      onClick={onClick}
    >
      {content}
    </Button>
  );
};

export default Buttons;

