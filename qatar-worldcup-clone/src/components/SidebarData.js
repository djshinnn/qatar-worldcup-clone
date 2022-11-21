import React from "react";

import { AiTwotoneHome, AiFillSchedule } from "react-icons/ai";
import { TiNews } from "react-icons/ti";
import { GiWorld } from "react-icons/gi";
import { SiFifa } from "react-icons/si";

export const SidebarData = [
  { name: "홈", path: "/home", icon: <AiTwotoneHome /> },
  { name: "뉴스", path: "/news", icon: <TiNews /> },
  { name: "일정", path: "/", icon: <AiFillSchedule /> },
  { name: "참가국", path: "/countries", icon: <GiWorld /> },
  { name: "FIFA", path: "/fifa", icon: <SiFifa /> },
];
