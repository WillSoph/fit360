import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import PaymentsForm from './pages/PaymentsForm';
import RegisterPlan from './pages/RegisterPlan';
import Payment from './pages/Payment';
import Faturas from './pages/Faturas';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/payments-form" component={PaymentsForm} />
      <Route path="/register-plan" component={RegisterPlan} />
      <Route path="/payment" component={Payment} />
      <Route path="/faturas" component={Faturas} />
    </BrowserRouter>
  );
}

export default Routes;