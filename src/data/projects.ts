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
      'Java library that tunnels JDBC connections over SSH, keeping database access encrypted without application code changes.',
    tags: ['Java', 'Security', 'Infrastructure'],
    link: 'https://github.com/xjodoin/jdbc-ssh-tunnel'
  },
  {
    title: 'TorpedoQuery',
    description:
      'Type-safe Hibernate query builder for constructing fluent HQL while keeping applications strongly typed.',
    tags: ['Java', 'Hibernate', 'DX'],
    link: 'https://github.com/xjodoin/torpedoquery'
  },
  {
    title: 'Awesome Circular Chart',
    description:
      'Animated radial and pie chart widgets for Flutter, built for expressive mobile dashboards.',
    tags: ['Flutter', 'Data Viz', 'UI'],
    link: 'https://github.com/xjodoin/flutter_awesome_circular_chart'
  }
];
