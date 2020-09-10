import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Block } from "galio-framework";

// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Product from "../screens/Product";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Elements from "../screens/Elements";
import Login from "../screens/Login";

import Notifications from "../screens/Notifications";
import Commandes from "../screens/Commandes";
import Map from "../screens/Map";
import Documents from "../screens/Documents";

import Clients from "../screens/admin/Clients";
import AjoutClient from "../screens/admin/AjoutClient";
import ShowClient from "../screens/admin/ShowClient";
import EditClient from "../screens/admin/EditClient";
import Comptes from "../screens/admin/Comptes";
// drawer

import CustomDrawerContent from "./Menu";

// header for screens
import { Icon, Header } from "../components";
import { argonTheme, tabs } from "../constants";

import Articles from "../screens/admin/Articles";
import AdminProduct from "../screens/admin/ProductWithActions";
import Roles from "../screens/admin/Roles";
const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ElementsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Elements"
        component={Elements}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Elements" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function ArticlesStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articles" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              hasActions
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="shopping Cart"
              back
              hasActions
              transparent
              navigation={navigation}
              scene={scene}
              style={{ backgroundColor: argonTheme.COLORS.WHITE }}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Accueil"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Accueil"
              search
              // options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              hasActions
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Panier"
              back
              hasActions
              transparent
              navigation={navigation}
              scene={scene}
              style={{ backgroundColor: argonTheme.COLORS.WHITE }}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />

      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Notifications"
              back
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="Commandes"
        component={Commandes}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Commandes"
              hasActions
              navigation={navigation}
              scene={scene}
              style={{ backgroundColor: argonTheme.COLORS.WHITE }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function DocumentsStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Documents"
        component={Documents}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Documents" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

function ClientsStack(props) {
  return (
    <Stack.Navigator initialRouteName="Clients" mode="card" headerMode="screen">
      <Stack.Screen
        name="Clients"
        component={Clients}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Clients"
              //search
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="AjoutClient"
        component={AjoutClient}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Ajout client"
              back
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="ShowClient"
        component={ShowClient}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="client detail"
              back
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="EditClient"
        component={EditClient}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="modifier"
              back
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}
function ArticleAdminStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Articles"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Articles"
              //search
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="AdminProduct"
        component={AdminProduct}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="informations détaillées du produit"
              back
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />

      {/* <Stack.Screen
        name="ShowClient"
        component={ShowClient}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="client detail"
              back
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="EditClient"
        component={EditClient}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="modifier"
              back
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      /> */}
    </Stack.Navigator>
  );
}
function RolesStack(props) {
  return (
    <Stack.Navigator initialRouteName="Roles" mode="card" headerMode="screen">
      <Stack.Screen
        name="Roles"
        component={Roles}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Roles"
              //search
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}
function ComptesStack(props) {
  return (
    <Stack.Navigator initialRouteName="Comptes" mode="card" headerMode="screen">
      <Stack.Screen
        name="Comptes"
        component={Comptes}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Comptes"
              //search
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}
export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Login"
        component={Login}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen name="Admin" component={AdminStack} />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Account" component={Register} />
      <Drawer.Screen name="Elements" component={ElementsStack} />
      <Drawer.Screen name="Articles" component={ArticlesStack} />
      <Drawer.Screen name="Documents" component={DocumentsStack} />
    </Drawer.Navigator>
  );
}

function AdminStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent isAdmin {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Clients"
    >
      <Drawer.Screen name="Clients" component={ClientsStack} />
      <Drawer.Screen name="Articles" component={ArticleAdminStack} />
      <Drawer.Screen name="Roles" component={RolesStack} />
      <Drawer.Screen name="Comptes" component={ComptesStack} />
    </Drawer.Navigator>
  );
}
