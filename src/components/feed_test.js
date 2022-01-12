import React, { useState } from 'react'
import useOrganizationSearch from './useOrganizationSearch'
import useCompanySearch from './useCompanySearch'
import { Col, Button, Row, Table, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import useMetadata from './useMetadata'
import usePagination from './usePagination'
import renderRow from '../utils/renderUtils'
import Loading from './loading';

export default function Feed() {
  const { sectors, riskTypes, loadingMetadata } = useMetadata()
  const { companies, pagination, loadingCompanyData } = useCompanySearch()
  console.log('hey')
  return (
    <div>

    </div>
    )
}