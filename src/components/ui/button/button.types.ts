export type ButtonProps = {
  label: string | SVGSVGElement;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'icon';
  classes?: string[];
};