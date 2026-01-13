import {
  ChartPie as BaseChartPie,
  House as BaseHouse,
  Settings as BaseSettings,
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
const Settings = interop(BaseSettings);
const ChartPie = interop(BaseChartPie);

export { ChartPie, House, interop, Settings };
