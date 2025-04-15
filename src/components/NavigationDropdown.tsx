
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavigationDropdownProps {
  items: {
    title: string;
    children?: {
      group: string;
      items: {
        title: string;
        href: string;
        description?: string;
      }[];
    }[];
  }[];
}

const exploreItems = [
  {
    title: "Explore",
    children: [
      {
        group: "Toolkits",
        items: [
          {
            title: "AI Crypto Kit",
            href: "/toolkits/ai-crypto-kit",
            description: "Securely integrate blockchain functionality into your AI agents"
          },
          {
            title: "Agent Secrets Manager",
            href: "/toolkits/agent-secrets-manager",
            description: "Securely store and manage credentials for your AI agents"
          },
          {
            title: "Unified MCP",
            href: "/toolkits/unified-mcp",
            description: "Unified server management for AI agents"
          },
          {
            title: "Dynamic App Search",
            href: "/toolkits/dynamic-app-search",
            description: "Intelligent function and app discovery for AI agents"
          }
        ]
      },
      {
        group: "Solutions",
        items: [
          {
            title: "Enterprise",
            href: "/solutions/enterprise",
            description: "Secure, scalable AI agents for enterprise"
          },
          {
            title: "Startup",
            href: "/solutions/startup",
            description: "Accelerate your startup's growth with AI agents"
          },
          {
            title: "Agency",
            href: "/solutions/agency",
            description: "Deliver cutting-edge AI solutions to your clients"
          }
        ]
      }
    ]
  }
];

const NavigationDropdown: React.FC<NavigationDropdownProps> = ({ items }) => {
  // Use the exploreItems directly instead of items prop to ensure we have the correct data
  const menuItems = exploreItems;
  
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <div className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link to={`/explore/${item.title.toLowerCase()}`} className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Explore {item.title}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Discover our {item.title.toLowerCase()} and resources to enhance your AI agents.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
                {item.children?.map((group) => (
                  <div key={group.group} className="col-span-1">
                    <h4 className="mb-2 text-sm font-semibold leading-none">{group.group}</h4>
                    <ul className="space-y-2">
                      {group.items.map((subItem) => (
                        <li key={subItem.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={subItem.href}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                            >
                              <div className="text-sm font-medium leading-none">{subItem.title}</div>
                              {subItem.description && (
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {subItem.description}
                                </p>
                              )}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationDropdown;
