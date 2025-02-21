// code-snippets.ts

export const html_code = `
`;

export const typescript_code = `

`;

export const code_string = `

import React, { useEffect, useState, useRef } from 'react';
import { ModusNavbar, ModusButton, ModusSideNavigation, ModusSideNavigationItem, ModusIcon, ModusTable } from '@trimble-oss/modus-react-components';

const MyComponent: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activePage, setActivePage] = useState<'home' | 'projects'>('home');
  const navbarRef = useRef<any>(null);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const element = navbarRef.current;
    if (element) {
      element.apps = [
        {
          description: 'The One Trimble Design System',
          logoUrl: 'https://modus.trimble.com/favicon.svg',
          name: 'Trimble Modus',
          url: 'https://modus.trimble.com/',
        },
      ];
      element.logoOptions = {
        primary: {
          url: 'https://modus.trimble.com/img/trimble-logo.svg',
          height: 24,
        },
        secondary: {
          url: 'https://modus.trimble.com/favicon.svg',
          height: 24,
        },
      };
      element.profileMenuOptions = {
        avatarUrl: 'https://avatar.example.com/broken-image-link.png',
        email: 'modus_user@trimble.com',
        initials: 'MU',
        signOutText: 'Sign out',
        username: 'Modus User',
      };
    }
  }, []);

  const handleMainMenuClick = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  const handleSideNavItemClick = (page: 'home' | 'projects') => {
    setActivePage(page);
  };

  const projects = [
    { name: 'Project 1', description: 'Description of Project 1' },
    { name: 'Project 2', description: 'Description of Project 2' },
    { name: 'Project 3', description: 'Description of Project 3' },
    { name: 'Project 4', description: 'Description of Project 4' },
    { name: 'Project 5', description: 'Description of Project 5' },
    { name: 'Project 6', description: 'Description of Project 6' },
    { name: 'Project 7', description: 'Description of Project 7' },
    { name: 'Project 8', description: 'Description of Project 8' },
    { name: 'Project 9', description: 'Description of Project 9' },
    { name: 'Project 10', description: 'Description of Project 10' },
  ];

  const projectColumns = [
    { header: 'Project Name', accessorKey: 'name', id: 'name', dataType: 'text' },
    { header: 'Description', accessorKey: 'description', id: 'description', dataType: 'text' },
  ];

  return (
    <div id="mains-container" style={{ height: '100vh', overflow: 'auto', backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '0 16px' }}>
      <div style={{ width: '100%', alignItems: 'center', height: '56px', boxShadow: '0 0 2px var(--modus-secondary) !important' }}>
        <ModusNavbar id="navbar1" showAppsMenu showHelp showMainMenu showNotifications ref={navbarRef} onMainMenuClick={handleMainMenuClick}>
          <ModusButton onClick={toggleTheme} leftIcon={theme === 'light' ? 'moon' : 'sun'}>{theme === 'light' ? 'Dark Theme' : 'Light Theme'}</ModusButton>
        </ModusNavbar>
      </div>
      <div id="container" style={{ display: 'flex', minHeight: '500px', overflowY: 'auto', position: 'relative', boxShadow: '0 0 2px var(--modus-secondary) !important', marginTop: '16px' }}>
        <ModusSideNavigation maxWidth="300px" id="sideNav1" targetContent="#main-container" expanded={isSidebarExpanded}>
          <ModusSideNavigationItem id="home-menu" label="Home" onClick={() => handleSideNavItemClick('home')}>
            <ModusIcon name="home" size="24" slot="menu-icon"></ModusIcon>
          </ModusSideNavigationItem>
          <ModusSideNavigationItem id="projects-menu" label="Projects" onClick={() => handleSideNavItemClick('projects')}>
            <ModusIcon name="folder" size="24" slot="menu-icon"></ModusIcon>
          </ModusSideNavigationItem>
        </ModusSideNavigation>
        <div id="panelcontent" style={{ padding: '10px', flex: 1, marginLeft: isSidebarExpanded ? '300px' : '0' }}>
          {activePage === 'home' && (
            <div id="home-page">
              <h1>Home Page</h1>
              <ul>
                {projects.map((project, index) => (
                  <li key={index}>{project.name}</li>
                ))}
              </ul>
            </div>
          )}
          {activePage === 'projects' && (
            <div id="projects-page">
              <h1>Projects Page</h1>
              <div style={{ width: '450px' }}>
                <ModusTable id="projects-table" columns={projectColumns} data={projects} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


// Dependencies: 'React', 'ModusNavbar', 'ModusButton', 'ModusSideNavigation', 'ModusSideNavigationItem', 'ModusIcon', 'ModusTable', 'useState', 'useEffect', 'useRef'

`;