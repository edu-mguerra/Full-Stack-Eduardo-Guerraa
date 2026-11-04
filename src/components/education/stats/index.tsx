import React from "react";
import "./style.css";
import { FiCode, FiCpu } from "react-icons/fi";
import { services } from "@/data/services";

export const Stats = () => {
  return (
    <section className="services">
      <div className="servicesHeader">
        <h1 className="servicesTitle">Áreas de Atuação</h1>
        <div className="headerDivider"></div>
        <p className="servicesSubtitle">
          Onde atuo com mais profundidade técnica
        </p>
      </div>

      <div className="servicesGrid">
        {services.map((service) => (
          <div
            key={service.title}
            className="serviceCard"
            style={{ "--card-color": service.color } as React.CSSProperties}
          >
            <div className="cardHeader">
              <div
                className="serviceIcon"
                style={{
                  backgroundColor: `${service.color}20`,
                  border: `2px solid ${service.color}40`,
                }}
              >
                {service.icon}
              </div>
              <h3 className="serviceTitle">{service.title}</h3>
            </div>
            <div className="cardContent">
              <p className="serviceDescription">{service.description}</p>
            </div>
            <div className="cardFooter">
              <FiCode className="footerIcon" />
              <FiCpu className="footerIcon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
