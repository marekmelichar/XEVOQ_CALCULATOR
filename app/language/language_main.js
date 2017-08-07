let language = {}

if (document.documentElement.lang === "en-US") {
  language = {
    testimonials: {
      dixons: {
        heading: "Dixons Carphone CoE, s.r.o.",
        sub_heading: "Success story thanks to XEVOQ",
        logo: "https://xevoq.com/wp-content/plugins/XEVOQ_CALCULATOR_REACT/app/images/Dixons_Carphone.svg",
        content: "Rooms at Dixons are mostly booked fully from morning on. However, not all people actually use the rooms. Over a several-month period, XEVOQ has on average provided more than 2 hours of cancelled meetings for each room each day. 30 hours of meeting room time saved per room effectively adds up to more than 3 free meeting rooms.",
        graph: "https://xevoq.com/wp-content/plugins/XEVOQ_CALCULATOR_REACT/app/images/xvq_graf_dixons.jpg"
      },
      ixperta: {
        heading: "IXPERTA",
        sub_heading: "Success story thanks to XEVOQ",
        logo: "https://xevoq.com/wp-content/plugins/XEVOQ_CALCULATOR_REACT/app/images/logo_ixperta.jpg",
        content: "In IXPERTA, we always practice what we preach. That is why both our Brno and Prague offices have XEVOQ installed on a total of 14 meeting rooms. And you can bet that our developers do not give us anything for free. We have to keep the system top notch.​",
        graph: "https://xevoq.com/wp-content/plugins/XEVOQ_CALCULATOR_REACT/app/images/xvq_graf_ixperta.jpg"
      }
    },
    calculator: {
      heading: "CALCULATE YOUR SAVINGS",
      how_we_got_those_numbers: "Final Savings MONTHLY:",
      how_did_we_calculate_this: "How did we calculate this?",
      price_per_square_meter: "Price per square meter",
      avg_room_size: "Average room size",
      number_of_rooms: "Number of rooms",
      cancellation: "Cancelled meetings / working hours",
      avg_number_of_people_per_meeting: "​Average number of people per meeting",
      avg_hourly_rate: "Average hourly rate",
      avg_number_of_meetings_per_day_room: "Average number of meetings per day/room",
      expected_number_of_collisions: "Expected number of collisions",
      loss_of_time_in_minutes: "Loss of time in minutes (combined)",
      fields_header_1: "Time saved on meeting rooms freed by autocancel feature",
      fields_header_2: "Time saved on preventing collisions (Is this room free?)"
    }
  }
}

if (document.documentElement.lang === "de-DE") {
  language = {
    testimonials: {
      dixons: {
        heading: "Dixons Carphone CoE, s.r.o.",
        sub_heading: "Erfolge dank XEVOQ",
        logo: "https://xevoq.com/wp-content/plugins/XEVOQ_CALCULATOR_REACT/app/images/Dixons_Carphone.svg",
        content: "Die Räume bei Dixons sind oft bereits am Morgen ausgebucht. Allerdings nutzen nicht alle Leute die Zimmer. Über mehrere Monate hinweg hat XEVOQ täglich aus jedem Raum durchschnittlich über 2 Stunden Zeit wegen stornierter Meetings herausgeholt. 30 Stunden Zeit aus Besprechungszimmern zu gewinnen, summiert sich auf über 3 kostenlose Tagungsräume.",
        graph: "https://xevoq.com/wp-content/plugins/XEVOQ_CALCULATOR_REACT/app/images/DE/xvq_graf_dixons_DE.jpg"
      },
      ixperta: {
        heading: "IXPERTA",
        sub_heading: "Erfolge dank XEVOQ",
        logo: "https://xevoq.com/wp-content/plugins/XEVOQ_CALCULATOR_REACT/app/images/logo_ixperta.jpg",
        content: "Wir von IXPERTA tun stets, was wir sagen: Deshalb haben wir an unseren Standorten in Brünn und Prag in insgesamt 14 Tagungsräumen XEVOQ installiert. Und glauben Sie ja nicht, wir bekämen von unseren eigenen Entwicklern etwas geschenkt. – Nein, wir müssen das System tipptopp in Schuss halten, damit sie zufrieden sind!",
        graph: "https://xevoq.com/wp-content/plugins/XEVOQ_CALCULATOR_REACT/app/images/DE/xvq_graf_ixperta_DE.jpg"
      }
    },
    calculator: {
      heading: "Berechnen Sie die Einsparungen",
      how_we_got_those_numbers: "Monatlich gespart:",
      how_did_we_calculate_this: "Wie haben wir das berechnet?",
      price_per_square_meter: "Preis pro Quadratmeter",
      avg_room_size: "Durchschnittliche Zimmergröße",
      number_of_rooms: "Zahl der Räume",
      cancellation: "Abgesagte Treffen / Arbeitszeit"
    }
  }
}

export default language;
