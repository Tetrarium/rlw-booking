import React from "react";

import { useGetLastTicketsQuery } from "@/API/API";

import LastTicket from "./last-ticket/lastTicket";
import s from "./lastTickets.module.sass";

const LastTickets = () => {
  const { data: lastTickets } = useGetLastTicketsQuery();

  console.log('lastTickets', lastTickets);

  if (!lastTickets) {
    return null;
  }

  return (
    <div className={s.container}>
      <h3 className={s.title}>Последние билеты</h3>
      {lastTickets.map((ticket) => (
        <LastTicket key={ticket.departure._id} item={ticket} />
      ))}
    </div>
  );
};

export default LastTickets;