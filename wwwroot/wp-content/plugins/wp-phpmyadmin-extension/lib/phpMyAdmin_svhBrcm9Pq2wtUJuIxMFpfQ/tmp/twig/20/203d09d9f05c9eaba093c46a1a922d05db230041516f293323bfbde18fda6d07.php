<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* select_all.twig */
class __TwigTemplate_9566aaabe56e7f9da14902cb07d07e51f77f1734f59fb4a98988398db0ebce96 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<img class=\"selectallarrow\" src=\"";
        echo twig_escape_filter($this->env, $this->extensions['PhpMyAdmin\Twig\AssetExtension']->getImagePath((("arrow_" . ($context["text_dir"] ?? null)) . ".png")), "html", null, true);
        echo "\"
    width=\"38\" height=\"22\" alt=\"";
echo _gettext("With selected:");
        // line 2
        echo "\">
<input type=\"checkbox\" id=\"";
        // line 3
        echo twig_escape_filter($this->env, ($context["form_name"] ?? null), "html", null, true);
        echo "_checkall\" class=\"checkall_box\"
    title=\"";
echo _gettext("Check all");
        // line 4
        echo "\">
<label for=\"";
        // line 5
        echo twig_escape_filter($this->env, ($context["form_name"] ?? null), "html", null, true);
        echo "_checkall\">";
echo _gettext("Check all");
        echo "</label>
<em class=\"with-selected\">";
echo _gettext("With selected:");
        // line 6
        echo "</em>
";
    }

    public function getTemplateName()
    {
        return "select_all.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  61 => 6,  54 => 5,  51 => 4,  46 => 3,  43 => 2,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "select_all.twig", "C:\\home\\site\\wwwroot\\wp-content\\plugins\\wp-phpmyadmin-extension\\lib\\phpMyAdmin_svhBrcm9Pq2wtUJuIxMFpfQ\\templates\\select_all.twig");
    }
}
