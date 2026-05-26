const mockData = {
  components: [
    {
      id: 1,
      name: 'Primary Button',
      category: 'buttons',
      description: 'Main call-to-action button',
      sizes: ['small', 'medium', 'large']
    },
    {
      id: 2,
      name: 'Secondary Button',
      category: 'buttons',
      description: 'Secondary action button',
      sizes: ['small', 'medium', 'large']
    },
    {
      id: 3,
      name: 'Basic Card',
      category: 'cards',
      description: 'Standard card container',
      preview: '<div style="padding: 16px; border: 1px solid #E8EAED; border-radius: 6px;">Card content goes here</div>'
    },
    {
      id: 4,
      name: 'Form Input',
      category: 'forms',
      description: 'Standard text input field',
      preview: '<input type="text" placeholder="Enter text..." style="padding: 8px; border: 1px solid #E8EAED; border-radius: 4px; width: 100%;" />'
    }
  ],

  colorPalette: [
    { name: 'Primary Navy', value: '#1A2332', usage: 'Primary backgrounds, text' },
    { name: 'Primary Dark', value: '#233044', usage: 'Navigation, dark backgrounds' },
    { name: 'Accent Blue', value: '#0052CC', usage: 'Links, buttons, active states' },
    { name: 'Success', value: '#2EA44F', usage: 'Success states, confirmations' },
    { name: 'Warning', value: '#D4A500', usage: 'Warning states, alerts' },
    { name: 'Error', value: '#D1242F', usage: 'Error states, destructive actions' },
    { name: 'Info', value: '#0052CC', usage: 'Information, notifications' }
  ],

  typography: {
    h1: { size: '32px', weight: 700, lineHeight: 1.2, example: 'Page Heading' },
    h2: { size: '24px', weight: 600, lineHeight: 1.3, example: 'Section Heading' },
    h3: { size: '20px', weight: 600, lineHeight: 1.4, example: 'Subsection' },
    h4: { size: '16px', weight: 600, lineHeight: 1.4, example: 'Small Heading' },
    body: { size: '16px', weight: 400, lineHeight: 1.5, example: 'Body text content' },
    label: { size: '14px', weight: 500, lineHeight: 1.5, example: 'Form label' },
    caption: { size: '12px', weight: 400, lineHeight: 1.4, example: 'Caption text' }
  },

  spacing: [
    { value: 4, unit: 'px', usage: 'Minimal spacing' },
    { value: 8, unit: 'px', usage: 'Small spacing' },
    { value: 12, unit: 'px', usage: 'Compact spacing' },
    { value: 16, unit: 'px', usage: 'Standard spacing' },
    { value: 24, unit: 'px', usage: 'Medium spacing' },
    { value: 32, unit: 'px', usage: 'Large spacing' },
    { value: 48, unit: 'px', usage: 'Extra large spacing' },
    { value: 64, unit: 'px', usage: 'Massive spacing' }
  ]
};
