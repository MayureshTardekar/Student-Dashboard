import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { BarChart3, BookOpen, ChevronLeft, ChevronRight, LayoutDashboard, Settings, Trophy, Users } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/" },
  { title: "Students", icon: Users, url: "/students" },
  { title: "Analytics", icon: BarChart3, url: "/analytics" },
  { title: "Courses", icon: BookOpen, url: "/courses" },
  { title: "Performance", icon: Trophy, url: "/performance" },
  { title: "Settings", icon: Settings, url: "/settings" },
];

export const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside 
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 ease-in-out relative h-screen sticky top-0`}
    >
      {/* Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 z-10 h-6 w-6 rounded-full bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 border-2 border-sidebar-border shadow-md"
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </Button>

      <div className="p-6 border-b border-sidebar-border flex-shrink-0">
        <h1 className={`text-xl font-bold text-sidebar-foreground transition-opacity duration-300 ${isCollapsed ? "opacity-0" : "opacity-100"}`}>
          {isCollapsed ? "" : "EduTrack"}
        </h1>
        {!isCollapsed && (
          <p className="text-sm text-sidebar-foreground/60 mt-1 transition-opacity duration-300">
            Student Monitoring
          </p>
        )}
        {isCollapsed && (
          <div className="text-2xl font-bold text-sidebar-primary text-center">📚</div>
        )}
      </div>
      
      {/* Navigation - takes up remaining space */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.url}
                end
                className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} px-4 py-3 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 group relative`}
                activeClassName="bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className={`font-medium transition-all duration-300 ${isCollapsed ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'}`}>
                  {item.title}
                </span>
                {isCollapsed && (
                  <span className="absolute left-full ml-2 px-2 py-1 bg-sidebar-primary text-sidebar-primary-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                    {item.title}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Help section at the bottom - COMMENTED OUT (not in assignment requirements) */}
      {/* {!isCollapsed && (
        <div className="p-4 border-t border-sidebar-border flex-shrink-0">
          <div className="bg-sidebar-accent rounded-lg p-4 hover:bg-sidebar-accent/80 transition-colors">
            <p className="text-xs text-sidebar-accent-foreground font-medium mb-1">Need Help?</p>
            <p className="text-xs text-sidebar-accent-foreground/60">Check our documentation</p>
          </div>
        </div>
      )} */}
    </aside>
  );
};
