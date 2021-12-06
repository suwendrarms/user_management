<div id="kt_header" class="header header-fixed">
<!--begin::Header Wrapper-->
    <div class="header-wrapper rounded-top-xl d-flex flex-grow-1 align-items-center">
			<!--begin::Container-->
		<div class="container-fluid d-flex align-items-center justify-content-end justify-content-lg-between flex-wrap">
				<!--begin::Menu Wrapper-->
			<div class="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
					<!--begin::Menu-->
				<div id="kt_header_menu" class="header-menu header-menu-mobile header-menu-layout-default">
						<!--begin::Nav-->
					<ul class="menu-nav">
						@role('admin')
						<li class="menu-item menu-item-submenu menu-item-rel @if(isset($activePage) && $activePage == 'showcase') menu-item-here @endif" data-menu-toggle="click" aria-haspopup="true">
							<a href="javascript:;" class="menu-link menu-toggle">
								<span class="menu-text">Create Permission</span>
								<i class="menu-arrow"></i>
							</a>
							
							<div class="menu-submenu menu-submenu-classic menu-submenu-left">
								<ul class="menu-subnav">
									<li class="menu-item" aria-haspopup="true">
										<a href="{{route('permission.index')}}" class="menu-link">
											<span class="menu-text">Create Permission</span>
											<span class="menu-desc"></span>
										</a>
									</li>
									<li class="menu-item" aria-haspopup="true">
										<a href="{{route('role.index')}}" class="menu-link">
											<span class="menu-text">Create Role</span>
											<span class="menu-desc"></span>
										</a>
									</li>
									<li class="menu-item" aria-haspopup="true">
										<a href="{{route('permission.user')}}" class="menu-link">
											<span class="menu-text">Create Customer Role</span>
											<span class="menu-desc"></span>
										</a>
									</li>
									
								</ul>
							</div>
						</li>
						@endrole
													
                    </ul>
                </div>
				
            </div>
        </div>			
		<!--end::Container-->
	</div>
<!--end::Header Wrapper-->
</div>

