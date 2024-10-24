import React from 'react';

const OurPartners: React.FC = () => {
  const partners = [
    {
      name: 'Founders and Coders',
      logo: 'https://media.licdn.com/dms/image/v2/D4E22AQF3kIun5Xd0jQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1725985490583?e=1732752000&v=beta&t=cW4ZNPah2C27o7o2K_0yUcvPmjTf2Y3rS7le4_gIC3U',
      link: 'https://learn.foundersandcoders.com/',
    },
    {
      name: 'Jack Casstles-Jones',
      logo: 'https://media.licdn.com/dms/image/v2/D5603AQG-Wrzo3nsuLg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725890609522?e=1735171200&v=beta&t=MoqnZH_v-UijOLhyBbe9vX3z1cd4d1XOSbKjnmgXgvY',
      link: 'https://www.linkedin.com/in/jackcasstlesjones/',
    },
    {
      name: 'William Man',
      logo: 'https://media.licdn.com/dms/image/v2/C4E03AQFS71B7SAFnJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1657728221838?e=1735171200&v=beta&t=aPZfGX4hHM4EWRJ4h9amJc1swLAiLA5NCI6jJeA5S8k',
      link: 'https://www.linkedin.com/in/william-man/',
    },
    {name: 'Khalos Moscato',
      logo: 'https://media.licdn.com/dms/image/v2/D5603AQFULVDv1CAkPw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701323198759?e=1735171200&v=beta&t=FR2FMcaZzcE1gJyG-XYVR2hF4BpctKhQ05eraBXuLWk',
      link: 'https://www.linkedin.com/in/khalosmoscato/',
    },
    {name: 'Itziar Cantero',
      logo: 'https://media.licdn.com/dms/image/v2/D4E03AQH3EyDTAdLR9Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712413600630?e=1735171200&v=beta&t=9gtyxFYvQ6zepJqaTsxi_EE_aayIo1bHqpCAS315pL0',
      link: 'https://www.linkedin.com/in/itziar-cantero/',
    },
    {name: 'Alex Rodriguez',
      logo: 'https://media.licdn.com/dms/image/v2/D4E03AQHnw7Csh_ppfg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699206809567?e=1735171200&v=beta&t=EpuKRhx0oOC4EVf3ZqNLZ1FjHjxXTO3SZ0EjGraPlf8',
      link: 'https://www.linkedin.com/in/alexsoftwareengineer/',
    },
    {name: 'Anna Braybrooke',
      logo: 'https://media.licdn.com/dms/image/v2/D4E03AQEXM_wxLoO2RQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1664202006378?e=1735171200&v=beta&t=kw0G_b87U9ZFdvo_29q5CPkR230zeJbeEW3kzWnNawE',
      link: 'https://www.linkedin.com/in/anna-braybrooke-b1719765/',
    },
    {name: 'Dan Sofer',
      logo: 'https://media.licdn.com/dms/image/v2/C4D03AQE4uclUjVvY7A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1553526134021?e=1735171200&v=beta&t=5CL9BkEW49h2sivREYk1kPwQX723xwAobwt0l1qiLi8',
      link: 'https://www.linkedin.com/in/dsofer/',
    },
    {name: 'Tatiana Gurova',
      logo: 'https://media.licdn.com/dms/image/v2/D4E35AQEF2XfAJVRKVQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1728590770227?e=1730379600&v=beta&t=8iMkjEoxIBesqNS11UzYJP2UdvbCicIRmpMGQE_9j2A',
      link: 'https://www.linkedin.com/in/t-gurova-fullstack-eng/',
    }
  ];

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="flex flex-col items-center space-y-4">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-30 mb-2" // Adjusted size for the logo
            />
            <h2 className="text-xl font-semibold text-center">{partner.name}</h2> 
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;