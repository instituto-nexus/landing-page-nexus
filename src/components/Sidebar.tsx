
import React from "react";
import { 
  LineChart, 
  BookText, 
  Calendar, 
  FileText, 
  Settings, 
  Clock, 
  Download
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarItem = ({ icon, label, active }: SidebarItemProps) => {
  return (
    <li>
      <a 
        href="#" 
        className={cn(
          "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors",
          active 
            ? "bg-primary/10 text-primary" 
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        )}
      >
        {icon}
        <span>{label}</span>
      </a>
    </li>
  );
};

const Sidebar = () => {
  return (
    <aside className="hidden lg:block w-60 h-[calc(100vh-64px)] border-r bg-white p-3 sticky top-16">
      <nav>
        <ul className="space-y-1">
          <SidebarItem 
            icon={<LineChart size={20} />} 
            label="Desempenho" 
            active={false} 
          />
          <SidebarItem 
            icon={<BookText size={20} />} 
            label="Disciplinas" 
            active={true} 
          />
          <SidebarItem 
            icon={<Calendar size={20} />} 
            label="Calendário" 
            active={false} 
          />
          <SidebarItem 
            icon={<FileText size={20} />} 
            label="Materiais" 
            active={false} 
          />
          <SidebarItem 
            icon={<Clock size={20} />} 
            label="Histórico" 
            active={false} 
          />
          <SidebarItem 
            icon={<Download size={20} />} 
            label="Downloads" 
            active={false} 
          />
          <SidebarItem 
            icon={<Settings size={20} />} 
            label="Configurações" 
            active={false} 
          />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
