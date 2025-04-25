'use client'

import { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import ReactGithubCalendar from 'react-github-calendar';

export default function GitHubCalendarComponent() {


  return (
        <div className=' mt-10 sm:mt-0   px-3 sm:px-0  relative h-full flex flex-col items-center justify-center'>
            <h1 className='mb-10 text-3xl sm:text-5xl  rounded-full p-2 px-4 w-full text-center font-bold '>Github <span className=' text-sky-400'>Calendar</span></h1>
            <GitHubCalendar
              username="natnael0024"
              colorScheme="dark"
              blockSize={18}
              blockMargin={3}
              fontSize={16}
              theme={{
                light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
                dark: ['#161b22', '#00b7ff5a', '#00b7ff98', '#00b7ffcd', '#00b7fff5'],
              }}
            />

        </div>
  );
}
