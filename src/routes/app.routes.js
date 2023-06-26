import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';
import { Inicial } from '../screens/Inicial/Inicial';
import { ListaInventario } from '../screens/Inventario/ListaInventario';
import { ListaBens } from '../screens/Inventario/ListaBens';
import { PesquisaBem } from '../screens/Inventario/PesquisaBem';
import { DetalheBem } from '../screens/Inventario/DetalheBem';
import { AlteraStatusBem } from '../screens/Inventario/AlteraStatusBem';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="inicial"
    >
      <Screen name="login" component={Login} />

      <Screen name="inicial" component={Inicial} />

      <Screen name="inventario" component={ListaInventario} />
      <Screen name="bem" component={ListaBens} />
      <Screen name="pesquisaBem" component={PesquisaBem} />
      <Screen name="detalheBem" component={DetalheBem} />
      <Screen name="alteraStatusBem" component={AlteraStatusBem} />
    </Navigator>
  );
}
