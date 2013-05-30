#!/usr/bin/perl
use strict;
use warnings;

my $cgihttp = <>;
my $id = pop_id();
my $jsonfile = '';

sub pop_id {
        $cgihttp =~ /"id":"(.*?)"/m;
        return $1;
}

sub pop_json_sans_id {
	$cgihttp =~ s/,"id":".*?"//g;
	return $cgihttp;
}

sub writer {
	open WFILE, ">>/var/www/dice/log/$id.json" or die $!; 
	print WFILE pop_json_sans_id();
	print WFILE "\n";
	close WFILE;
}

sub reader {
	open RFILE, "</var/www/dice/log/$id.json" or die $!;
	$jsonfile = <RFILE>;
	close RFILE;
}

sub httpheader {
	print "Content-type: text/plain\n";
	print "Status: 204 No Response\n\n";
}

writer();
reader();
httpheader();
