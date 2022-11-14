import React, { useState, useEffect } from "react";
import { RouteComponentProps, Link } from "@reach/router";
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import { Header, Toolbar, TableHeader } from "components";
import { BasicLayout } from "layouts";
import "./style.scss";

export const DashboardPage: React.FC<RouteComponentProps> = () => {

  return (
    <BasicLayout>
			<Header />
			<Toolbar />
			<Divider className="divide-line" />
			<TableHeader />
			<Card style={{height: "100%", backgroundColor: "#F5F5F5"}} />
    </BasicLayout>
  );
};
