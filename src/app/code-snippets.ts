// code-snippets.ts

export const html_code = `
`;

export const typescript_code = `

`;


export const CodeStrings = [
`
import React, { useEffect, useRef } from 'react';
import { ModusNavbar, ModusSideNavigation, ModusSideNavigationItem, ModusIcon } from '@trimble-oss/modus-react-components';

const MyComponent: React.FC = () => {
  const navbarRef = useRef<any>(null);

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

  return (
    <div style={{ height: '100vh', overflow: 'auto' }}>
      <ModusNavbar ref={navbarRef} showAppsMenu showHelp showMainMenu showNotifications>
        <div slot="notifications">Render your own notifications.</div>
      </ModusNavbar>
      <div id="container1" style={{ display: 'flex', minHeight: '500px', overflowY: 'auto', position: 'relative', boxShadow: '0 0 2px var(--modus-secondary) !important' }}>
        <ModusSideNavigation maxWidth="300px" id="sideNav2" targetContent="#defaultTemplate1 #panelcontent1">
          <ModusSideNavigationItem id="home-menu" label="Home page">
            <ModusIcon name="home" size="24" slot="menu-icon"></ModusIcon>
          </ModusSideNavigationItem>
          <ModusSideNavigationItem id="usage-menu" label="Usage">
            <ModusIcon name="flow_chart" size="24" slot="menu-icon"></ModusIcon>
          </ModusSideNavigationItem>
          <ModusSideNavigationItem id="styles-menu" label="Styles">
            <ModusIcon name="bar_graph_line" size="24" slot="menu-icon"></ModusIcon>
          </ModusSideNavigationItem>
          <ModusSideNavigationItem id="accessibility-menu" label="Accessibility">
            <ModusIcon name="screen" size="24" slot="menu-icon"></ModusIcon>
          </ModusSideNavigationItem>
        </ModusSideNavigation>
        <div id="panelcontent1" style={{ padding: '10px' }}>
          <div id="overview1">
            <p>The side navigation of an application provides context through accessible menu options and positions a consistent component to connect to various pages in the application.</p>
            <p>The side navigation is a collapsible side content of the site’s pages. It is located alongside the page’s primary content. The component is designed to add side content to a fullscreen application. It is activated through the “hamburger” menu in the Navbar.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dependencies: 'React', 'ModusNavbar', 'ModusSideNavigation', 'ModusSideNavigationItem', 'ModusIcon', 'useEffect', 'useRef'

`,

`
import React, { useState } from 'react';
import { ModusTextInput, ModusButton, ModusIcon } from '@trimble-oss/modus-react-components';

const MyComponent: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [chat, setChat] = useState<string[]>([]);

  const handleSendClick = () => {
    if (message.trim()) {
      setChat([...chat, message]);
      setMessage('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', overflow: 'auto', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center', width: '300px' }}>
        <ModusTextInput
          value={message}
          onInput={(e: any) => setMessage(e.target.value)}
          style={{ flex: 1 }}
        />
        <ModusButton buttonStyle="borderless" onClick={handleSendClick} rightIcon="paper_plane"></ModusButton>
      </div>
      <div style={{ width: '300px', border: '1px solid #ccc', borderRadius: '8px', padding: '8px', maxHeight: '200px', overflowY: 'auto' }}>
        {chat.map((msg, index) => (
          <div key={index} style={{ marginBottom: '8px' }}>{msg}</div>
        ))}
      </div>
    </div>
  );
};


// Dependencies: 'React', 'ModusTextInput', 'ModusButton', 'ModusIcon', 'useState'

`,
`
import React, { useEffect, useRef } from 'react';
import { ModusNavbar } from '@trimble-oss/modus-react-components';

const MyComponent: React.FC = () => {
  const navbarRef = useRef<any>(null);

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

  return (
    <div style={{ height: '100vh', overflow: 'auto' }}>
      <ModusNavbar
        ref={navbarRef}
        id="navbar4"
        showAppsMenu
        showHelp
        showMainMenu
        showNotifications
      >
        <div slot="main" style={{ height: '300px' }}>
          Render your own main menu.
        </div>
        <div slot="notifications">Render your own notifications.</div>
      </ModusNavbar>
    </div>
  );
};

// Dependencies: 'React','ModusNavbar','useEffect','useRef'

`,
`
import React from 'react';
import { ModusCard } from '@trimble-oss/modus-react-components';

const MyComponent: React.FC = () => {
  return (
    <div id="card-container1" style={{ display: 'flex', flexDirection: 'row', gap: '16px', padding: '16px', overflow: 'auto' }}>
      <ModusCard height="300px" width="250px" showCardBorder={true} showShadowOnHover={true}>
        <div style={{ padding: '10px' }}>
          <h4>CONSTRUCTION</h4>
          <p>> $500 BILLION</p>
          <p>in NEW construction project value managed annually through Trimble ERPs</p>
          <p>> 1 MILLION</p>
          <p>users subscribe to Trimble Sketchup</p>
        </div>
      </ModusCard>
      <ModusCard height="300px" width="250px" showCardBorder={true} showShadowOnHover={true}>
        <div style={{ padding: '10px' }}>
          <h4>GEOSPATIAL</h4>
          <p>> 200 THOUSAND</p>
          <p>instruments delivered over the last five years</p>
          <p>> 1 MILLION</p>
          <p>hours of surveying and mapping work gets done with Trimble technology each month</p>
        </div>
      </ModusCard>
      <ModusCard height="300px" width="250px" showCardBorder={true} showShadowOnHover={true}>
        <div style={{ padding: '10px' }}>
          <h4>TRANSPORTATION</h4>
          <p>> 90%</p>
          <p>of top 200 trucking companies in North America use Trimble solutions</p>
          <p>> 158 THOUSAND</p>
          <p>Carriers globally are connected to 1,400 shippers using Trimble</p>
        </div>
      </ModusCard>
    </div>
  );
};

// Dependencies: 'React', 'ModusCard'

`,
`
import React, { useEffect } from 'react';
import { ModusButton } from '@trimble-oss/modus-react-components';

const MyComponent: React.FC = () => {
  useEffect(() => {
    const phoneButton = document.querySelector('#phoneButton');
    if (phoneButton) {
      phoneButton.addEventListener('buttonClick', () => {
        console.log('Button clicked!');
      });
    }
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', overflow: 'auto' }}>
      <ModusButton id="phoneButton" leftIcon="phone">Click Me</ModusButton>
    </div>
  );
};

// Dependencies: 'React', 'ModusButton', 'useEffect'
`
,
`
import React, { useEffect, useRef } from 'react';
import { ModusTextInput } from '@trimble-oss/modus-react-components';

const MyComponent: React.FC = () => {
  const passwordInputRef = useRef<any>(null);

  useEffect(() => {
    const passwordInput = passwordInputRef.current;
    const handleInput = (event: any) => {
      const value = event.target.value;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

      if (hasUpperCase && hasLowerCase && hasSpecialChar) {
        passwordInput.errorText = '';
        passwordInput.validText = 'Valid password';
      } else {
        passwordInput.validText = '';
        passwordInput.errorText = 'Password must contain uppercase, lowercase, and a special character';
      }
    };

    passwordInput.addEventListener('input', handleInput);
    return () => {
      passwordInput.removeEventListener('input', handleInput);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', overflow: 'auto' }}>
      <ModusTextInput ref={passwordInputRef} label="Password" placeholder="Enter your password" />
    </div>
  );
};

// Dependencies: 'React', 'ModusTextInput', 'useEffect', 'useRef'

`,
`
import React, { useEffect, useRef } from 'react';
import { ModusNavbar, ModusCard, ModusButton } from '@trimble-oss/modus-react-components';

const MyComponent: React.FC = () => {
  const navbarRef = useRef<any>(null);

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

  const projects = [
    { name: 'Project 1', summary: 'Summary 1', description: 'Description 1', imageUrl: 'https://placehold.co/300x200' },
    { name: 'Project 2', summary: 'Summary 2', description: 'Description 2', imageUrl: 'https://placehold.co/300x200' },
    { name: 'Project 3', summary: 'Summary 3', description: 'Description 3', imageUrl: 'https://placehold.co/300x200' },
    { name: 'Project 4', summary: 'Summary 4', description: 'Description 4', imageUrl: 'https://placehold.co/300x200' },
    { name: 'Project 5', summary: 'Summary 5', description: 'Description 5', imageUrl: 'https://placehold.co/300x200' },
  ];

  return (
    <div style={{ height: '100vh', overflow: 'auto' }}>
      <ModusNavbar ref={navbarRef} id="navbar5" showAppsMenu showHelp showMainMenu showNotifications>
        <div slot="main" style={{ height: '300px' }}>Render your own main menu.</div>
        <div slot="notifications">Render your own notifications.</div>
      </ModusNavbar>
      <div id="project-container2" style={{ display: 'flex', flexDirection: 'row', gap: '16px', padding: '16px', overflow: 'auto' }}>
        {projects.map((project, index) => (
          <ModusCard key={index} height="400px" width="300px" showCardBorder={true} showShadowOnHover={true} style={{ padding: '10px' }}>
            <div style={{ padding: '10px' }}>
              <img src={project.imageUrl} alt={project.name} style={{ width: '100%', height: 'auto' }} />
              <h4>{project.name}</h4>
              <h5>{project.summary}</h5>
              <p>{project.description}</p>
              <ModusButton>Launch</ModusButton>
            </div>
          </ModusCard>
        ))}
      </div>
    </div>
  );
};

// Dependencies: 'React', 'ModusNavbar', 'ModusCard', 'ModusButton', 'useEffect', 'useRef'

`


]

export const code_string = `
`