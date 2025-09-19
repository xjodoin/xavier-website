export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: 'JDBC SSH Tunnel',
    description:
      'Java library that tunnels any JDBC driver connection over secure SSH, keeping database access encrypted without application code changes.',
    tags: ['Java', 'Security', 'Database'],
    link: 'https://github.com/xjodoin/jdbc-ssh-tunnel'
  },
  {
    title: 'TorpedoQuery',
    description:
      'Type-safe Hibernate query builder for constructing fluent HQL queries while keeping applications strongly typed.',
    tags: ['Java', 'Hibernate', 'Open Source'],
    link: 'https://github.com/xjodoin/torpedoquery'
  },
  {
    title: 'Awesome Circular Chart',
    description:
      'Animated radial and pie chart widgets for Flutter applications, enabling smooth data visualizations.',
    tags: ['Flutter', 'Data Viz', 'Widgets'],
    link: 'https://github.com/xjodoin/flutter_awesome_circular_chart'
  }
];
