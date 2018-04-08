import React, {Component} from 'react';
import Api from 'superagent';

import {BootstrapTable,
  TableHeaderColumn} from 'react-bootstrap-table';
import {Line as LineChart} from 'react-chartjs';

import logo from './image/logo.png';
import rice from './image/rice.svg';

import './bower_components/bootstrap/dist/css/bootstrap.min.css';
import './bower_components/font-awesome/css/font-awesome.min.css';
import './bower_components/Ionicons/css/ionicons.min.css';
import './dist/css/AdminLTE.css';
import './dist/css/skins/_all-skins.min.css';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = ({
          serverDashboard:'http://103.43.44.124:8080/beraskita-core-webservice',
        })
    }
    render(){
        const base64 = require('base-64');

        //stokberasimport, konsumsi, perbandingan
        Api
        .get(this.state.serverDashboard + '/user-stocks/total-stock?firstDate=01/04/2018 10:10:10&lastDate=10/4/2018 10:10:10')
        .set('Authorization', 'Basic ' + base64.encode("username:password"))
        .set('Accept', 'application/json')
        .then(function(res) {
            document.getElementById("sbin").innerHTML = JSON.stringify(res.body.total_stock) + " Ton";
            document.getElementById("kbin").innerHTML = JSON.stringify(res.body.total_consumption) + " Ton";
        });

        //chart perbandingan
        Api
        .get(this.state.serverDashboard + '/user-stocks/graph?firstDate=01/04/2018 10:10:10&lastDate=03/4/2018 10:10:10&productId=1&stockTypeId=2')
        .set('Authorization', 'Basic ' + base64.encode("username:password"))
        .set('Accept', 'application/json')
        .then(function(res) {
            //value
        });

        //rank toko
        Api
        .get(this.state.serverDashboard + '/user-stocks/rank?firstDate=01/04/2018 10:10:10&lastDate=10/4/2018 10:10:10&productId=1&stockTypeId=2&sort=max')
        .set('Authorization', 'Basic ' + base64.encode("username:password"))
        .set('Accept', 'application/json')
        .then(function(res) {
            //value
        });

        //rank daerah
        Api
        .get(this.state.serverDashboard + '/user-stocks/rank-by-area?firstDate=01/04/2018 10:10:10&lastDate=10/4/2018 10:10:10&productId=1&stockTypeId=2&sort=max')
        .set('Authorization', 'Basic ' + base64.encode("username:password"))
        .set('Accept', 'application/json')
        .then(function(res) {
            //value
        });

        //list produk
        Api
        .get(this.state.serverDashboard + '/products/list')
        .set('Authorization', 'Basic ' + base64.encode("username:password"))
        .set('Accept', 'application/json')
        .then(function(res) {
            //value
        });

        //list stok
        Api
        .get(this.state.serverDashboard + 'stock-types/list')
        .set('Authorization', 'Basic ' + base64.encode("username:password"))
        .set('Accept', 'application/json')
        .then(function(res) {
            //value
        });

        var chartData = {
            labels: ["2018-04-02", "2018-04-03"],
            datasets: [
                {
                    label: "stocks",
                    fill: false,
                    pointHoverRadius: 5,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [10, 24],
                    spanGaps: false,
                    backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                },{
                    label: "consumptions",
                    fill: false,
                    pointHoverRadius: 5,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [12, 34],
                    spanGaps: false,
                    backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                }
            ],
            fill: false,
        };
  
        var data = [
            {
            id_retailer: 123456,
            name: 'Test',
            pic_name: 'Test',
            address: 'Ciomas',
            total: '1805',
            product_name: 'Beras Medium 5 Kg'
            }
        ];
    
        var dataProv = [
            {
                province: null,
                city: null,
                district: 'Bogor',
                stock: 1805
            }
        ];

        function priceFormatter(cell, row){
            return 'Beras Masuk ' + cell + ' Ton';
        }

        return (
            <div className="wrapper">
            <header className="main-header">
              <nav className="navbar navbar-static-top">
                <div className="container" style={{width:'100%'}}>
                  <div className="navbar-header">
                    <a href="" ><img src={logo} width="50" /></a>
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                      <i className="fa fa-bars"></i>
                    </button>
                  </div>
      
                  <div className="navbar-custom-menu">
                    <div className="collapse navbar-collapse pull-left" id="navbar-collapse">
                    <form className="navbar-form navbar-left" role="search">
                      Tanggal
                      <div className="input-group date" style={{paddingLeft:10, paddingRight:10}}>
                        <input type="text" className="form-control pull-right" id="datepicker" style={{Width: 100}} />
                          <div className="input-group-addon">
                            <i className="fa fa-calendar"></i>
                          </div>
                      </div>
                      s/d
                      <div className="input-group date" style={{paddingLeft:10}}>
                        <input type="text" className="form-control pull-right" id="datepicker" style={{Width: 100}} />
                          <div className="input-group-addon">
                            <i className="fa fa-calendar"></i>
                          </div>
                      </div>
                      <div className="form-group" style={{paddingLeft:10}}>
                        <button type="submit" className="btn btn-success btn-block btn-flat" style={{borderRadius:24, width: 100}}>Cari</button>
                      </div>
                    </form>
      
                    <button className="btn">
                      <span style={{fontSize:28, color:585858}}>
                        <i className="fa fa-power-off"></i>
                      </span>
                    </button>
      
                  </div>
                </div>
      
                </div>
              </nav>
            </header>
      
            <div className="content-wrapper">
              <div className="container" style={{width:'100%'}}>
                  <section className="content">
                      <div className="row">
      
                        <div className="col-md-6">
                          <div className="row">
      
                            <div className="col-xs-6">
                              <div className="info-box" style={{ paddingTop: 30, paddingBottom: 30 }}>
                                <span className="info-box-icon">
                                  <img src={ rice } width="60" />
                                </span>
                                <div className="info-box-content">
                                  <span style={{fontSize:12}}>Stok Beras Import Nasional</span><br />
                                  <span style={{fontSize:35}} id="sbin"></span>
                                </div>
                              </div>
      
                              <div className="info-box" style={{ paddingTop: 30, paddingBottom: 30 }}>
                                <span className="info-box-icon">
                                  <img src={ rice } width="60" />
                                </span>
                                <div className="info-box-content">
                                  <span style={{fontSize:12}}>Konsumsi Beras Import Nasional</span><br />
                                  <span style={{fontSize:35}} id="kbin"></span>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-6">
      
                              <div className="box box-default" style={{height:300}}>
                                <div className="box-header">
                                  <h3 className="box-title text-center" style={{fontSize: 15}}>Perbandingan Konsumsi Jenis Beras Nasional</h3>
                                </div>
                                <div className="box-body">
                                  tabel
                                </div>
                              </div>
      
                            </div>
      
      
                            <div className="col-xs-12">
      
                              <div className="box box-default" style={{height:600}}>
                                <div className="box-header">
                                  <h3 className="box-title" style={{fontSize: 15}}>Rangking Performansi Toko</h3>
                                  <div className="pull-right" style={{paddingLeft: 5}}>
                                    <div className="input-group">
                                      <select className="form-control" style={{backgroundColor: '#f5f5f5'}}>
                                        <option value="1">Tertinggi</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="pull-right" style={{paddingLeft: 5}}>
                                    <div className="input-group">
                                      <select className="form-control" style={{backgroundColor: '#f5f5f5'}}>
                                        <option value="1">Stok</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="pull-right" style={{paddingLeft: 5}}>
                                    <div className="input-group">
                                      <select className="form-control" style={{backgroundColor: '#f5f5f5'}}>
                                        <option value="1">Total Semua Jenis Barang</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="box-body">
                                  <BootstrapTable data={data} striped={true} hover={true}>
                                      <TableHeaderColumn dataField="total" isKey={true} dataAlign="center" dataSort={true}>Rank</TableHeaderColumn>
                                      <TableHeaderColumn dataField="pic_name" dataSort={true}>Nama Pemilik</TableHeaderColumn>
                                      <TableHeaderColumn dataField="name" >Nama Toko</TableHeaderColumn>
                                      <TableHeaderColumn dataField="address" dataSort={true}>Alamat</TableHeaderColumn>
                                      <TableHeaderColumn dataField="total" dataFormat={priceFormatter}>Jumlah</TableHeaderColumn>
                                  </BootstrapTable>
                                </div>
                              </div>
      
                            </div>
      
                          </div>
                        </div>
      
                        <div className="col-md-6">
      
                        <div className="box box-default" style={{height:300}}>
                                <div className="box-header">
                                  <h3 className="box-title text-center" style={{fontSize: 15}}>Perbandingan Konsumsi Jenis Beras Nasional</h3>
                                </div>
                                <div className="box-body">
                                  <LineChart data={chartData} options={null} width="550" height="150"/>
                                </div>
                              </div>
      
                          <div className="box box-default" style={{height:600}}>
                            <div className="box-header">
                              <h3 className="box-title" style={{fontSize: 15}}>Rangking Performansi Daerah</h3>
                              <div className="pull-right" style={{paddingLeft: 5}}>
                                <div className="input-group">
                                  <select className="form-control" style={{backgroundColor: '#f5f5f5'}}>
                                    <option value="1">Tertinggi</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="pull-right" style={{paddingLeft: 5}}>
                                <div className="input-group">
                                  <select className="form-control" style={{backgroundColor: '#f5f5f5'}}>
                                    <option value="1">Stok</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="pull-right" style={{paddingLeft: 5}}>
                                <div className="input-group">
                                  <select className="form-control" style={{backgroundColor: '#f5f5f5'}}>
                                    <option value="1">Total Semua Jenis Barang</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="box-body">
                            <BootstrapTable data={dataProv} striped={true} hover={true}>
                                <TableHeaderColumn dataField="stock" isKey={true} dataAlign="center" dataSort={true}>Rank</TableHeaderColumn>
                                <TableHeaderColumn dataField="province" dataSort={true}>Provinsi</TableHeaderColumn>
                                <TableHeaderColumn dataField="city" >Kabupaten</TableHeaderColumn>
                                <TableHeaderColumn dataField="district" dataSort={true}>Kecamatan</TableHeaderColumn>
                                <TableHeaderColumn dataField="stock" dataFormat={priceFormatter}>Jumlah</TableHeaderColumn>
                            </BootstrapTable>
                            </div>
                          </div>
      
                        </div>
      
                      </div>
                </section>
              </div>
            </div>
      
            </div>
          )
    }
}