import {
  ChartPie as BaseChartPie,
  CogIcon as BaseCogIcon,
  House as BaseHouse,
  LucideIcon,
  LucideProps,
} from "lucide-react-native";
import { cssInterop } from "nativewind";
import { cn } from "./utils";

function interop(icon: LucideIcon) {
  const BaseIcon = cssInterop(icon, {
    className: "style",
  });

  return function ({ className, size = 24, ...props }: LucideProps) {
    return (
      <BaseIcon
        className={cn("text-foreground", className)}
        size={size}
        {...props}
      />
    );
  };
}

const House = interop(BaseHouse);
const CogIcon = interop(BaseCogIcon);
const ChartPie = interop(BaseChartPie);

export { ChartPie, CogIcon, House, interop };
