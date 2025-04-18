import React, { useState, useEffect, useRef, useContext, useReducer, useMemo, useCallback } from 'react';
import {
  ModusAccordion,
  ModusAccordionItem,
  ModusActionBar,
  ModusAlert,
  ModusAutocomplete,
  ModusBadge,
  ModusBreadcrumb,
  ModusButton,
  ModusButtonGroup,
  ModusCard,
  ModusCheckbox,
  ModusChip,
  ModusDataTable,
  ModusDateInput,
  ModusDatePicker,
  ModusDivider,
  ModusDropdown,
  ModusFileDropzone,
  ModusIcon,
  ModusList,
  ModusListItem,
  ModusMessage,
  ModusModal,
  ModusNavbar,
  ModusNavbarAppsMenu,
  ModusNavbarButtonMenu,
  ModusNavbarMainMenu,
  ModusNavbarNotificationsMenu,
  ModusNavbarProfileMenu,
  ModusNavbarSearchOverlay,
  ModusNumberInput,
  ModusPagination,
  ModusProgressBar,
  ModusRadioGroup,
  ModusSelect,
  ModusSentimentScale,
  ModusSideNavigation,
  ModusSideNavigationItem,
  ModusSlider,
  ModusSpinner,
  ModusSwitch,
  ModusTable,
  ModusTableCellEditor,
  ModusTableCellMain,
  ModusTableColumnsVisibility,
  ModusTableDropdownMenu,
  ModusTableFillerColumn,
  ModusTableRowActions,
  ModusTableRowActionsCell,
  ModusTableRowActionsMenu,
  ModusTableToolbar,
  ModusTabs,
  ModusTextInput,
  ModusTextareaInput,
  ModusTimePicker,
  ModusToast,
  ModusToolbar,
  ModusTooltip,
  ModusTreeView,
  ModusTreeViewItem,
  ModusUtilityPanel
} from '@trimble-oss/modus-react-components';

const ComptDict = {
  'React': React,
  'useState': useState,
  'useEffect': useEffect,
  'useRef': useRef,
  'useContext': useContext,
  'useReducer': useReducer,
  'useMemo': useMemo,
  'useCallback': useCallback,
  'ModusAccordion': ModusAccordion,
  'ModusAccordionItem': ModusAccordionItem,
  'ModusActionBar': ModusActionBar,
  'ModusAlert': ModusAlert,
  'ModusAutocomplete': ModusAutocomplete,
  'ModusBadge': ModusBadge,
  'ModusBreadcrumb': ModusBreadcrumb,
  'ModusButton': ModusButton,
  'ModusButtonGroup': ModusButtonGroup,
  'ModusCard': ModusCard,
  'ModusCheckbox': ModusCheckbox,
  'ModusChip': ModusChip,
  'ModusDataTable': ModusDataTable,
  'ModusDateInput': ModusDateInput,
  'ModusDatePicker': ModusDatePicker,
  'ModusDivider': ModusDivider,
  'ModusDropdown': ModusDropdown,
  'ModusFileDropzone': ModusFileDropzone,
  'ModusIcon': ModusIcon,
  'ModusList': ModusList,
  'ModusListItem': ModusListItem,
  'ModusMessage': ModusMessage,
  'ModusModal': ModusModal,
  'ModusNavbar': ModusNavbar,
  'ModusNavbarAppsMenu': ModusNavbarAppsMenu,
  'ModusNavbarButtonMenu': ModusNavbarButtonMenu,
  'ModusNavbarMainMenu': ModusNavbarMainMenu,
  'ModusNavbarNotificationsMenu': ModusNavbarNotificationsMenu,
  'ModusNavbarProfileMenu': ModusNavbarProfileMenu,
  'ModusNavbarSearchOverlay': ModusNavbarSearchOverlay,
  'ModusNumberInput': ModusNumberInput,
  'ModusPagination': ModusPagination,
  'ModusProgressBar': ModusProgressBar,
  'ModusRadioGroup': ModusRadioGroup,
  'ModusSelect': ModusSelect,
  'ModusSentimentScale': ModusSentimentScale,
  'ModusSideNavigation': ModusSideNavigation,
  'ModusSideNavigationItem': ModusSideNavigationItem,
  'ModusSlider': ModusSlider,
  'ModusSpinner': ModusSpinner,
  'ModusSwitch': ModusSwitch,
  'ModusTable': ModusTable,
  'ModusTableCellEditor': ModusTableCellEditor,
  'ModusTableCellMain': ModusTableCellMain,
  'ModusTableColumnsVisibility': ModusTableColumnsVisibility,
  'ModusTableDropdownMenu': ModusTableDropdownMenu,
  'ModusTableFillerColumn': ModusTableFillerColumn,
  'ModusTableRowActions': ModusTableRowActions,
  'ModusTableRowActionsCell': ModusTableRowActionsCell,
  'ModusTableRowActionsMenu': ModusTableRowActionsMenu,
  'ModusTableToolbar': ModusTableToolbar,
  'ModusTabs': ModusTabs,
  'ModusTextInput': ModusTextInput,
  'ModusTextareaInput': ModusTextareaInput,
  'ModusTimePicker': ModusTimePicker,
  'ModusToast': ModusToast,
  'ModusToolbar': ModusToolbar,
  'ModusTooltip': ModusTooltip,
  'ModusTreeView': ModusTreeView,
  'ModusTreeViewItem': ModusTreeViewItem,
  'ModusUtilityPanel': ModusUtilityPanel
};

export default ComptDict;
