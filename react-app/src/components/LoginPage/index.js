import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../../store/session";
import logo from "../../images/spotifyLogo.png";
import "./LoginPage.css";

