<?php /* Wrapper Name: Header */ ?>
<div class="row">
	<div class="span6" data-motopress-type="static" data-motopress-static-file="static/static-logo.php">
		<?php get_template_part("static/static-logo"); ?>
	</div>
	<div class="span6 header-sidebar" data-motopress-type="dynamic-sidebar" data-motopress-sidebar-id="footer-sidebar-4">
		<?php dynamic_sidebar("header-sidebar"); ?>
	</div>
</div>
<div class="row nav-top">
	<div class="span12" data-motopress-type="static" data-motopress-static-file="static/static-nav.php">
		<?php get_template_part("static/static-nav"); ?>
	</div>
</div>